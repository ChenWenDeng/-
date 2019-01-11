<template>
	<div>
		<headerTop/>
    <div class="login-container">
        <div class="login-box">
            <div class="header-container">
                <div>E</div>
                <p>欢迎注册 Eend商城 账号 </p>
            </div>
            <div class="input-container">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm form-container">
                    <el-form-item class="input-box" label="用户账号" prop="userName">
                        <el-input ref="regText" class="input-con" type="text" v-model="ruleForm2.userName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-box" label="用户密码" prop="userPwd">
                        <el-input class="input-con" type="password" v-model="ruleForm2.userPwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-box" label="确认密码" prop="confirmPwd">
                        <el-input class="input-con" type="password" v-model="ruleForm2.confirmPwd" autocomplete="off"></el-input>
                    </el-form-item>
										<el-form-item class="input-box" label="联系电话" prop="phone">
												<el-input class="input-con" type="text" v-model="ruleForm2.phone" autocomplete="off"></el-input>
										</el-form-item>
										<el-form-item class="input-box input-buttom" label="邮箱地址" prop="eliam">
												<el-input class="input-con" type="Email" v-model="ruleForm2.eliam" autocomplete="off"></el-input>
										</el-form-item>
										<div class="go-container">
											<router-link class="Gologin" tag="span" to="/">去首页>>></router-link>
											<router-link class="Gologin" tag="span" to="/login">已有账号去登录?</router-link>
										</div>
                    <el-form-item class="input-box">
                        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm2')">注册</el-button>
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
import axios from 'axios'
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
		components:{
			headerTop,
			Footer
		},
    data() {
			//验证用户名
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账户不能为空'));
        }
        // var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
				var uPattern = /^(?!\d+$)[A-Za-z0-9_\u4e00-\u9fa5]{3,16}$/;
        if(uPattern.test(value)){
            callback();
        }
// 				else if(value == this.ruleForm2.userName){
// 					return callback(new Error('用户名已存在,请重新输入'));
// 				}
				else{
            return callback(new Error('账户要求3-16位由字母、数字、_或汉字组成、不能由纯数字组成'));
        }
				if(value == this.ruleForm2.userName){
					return callback(new Error('用户名已存在,请重新输入'));
				}
      };
			//验证密码
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
			//验证确认密码
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.userPwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
			//验证手机号码
			var checkPhone = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('手机号码不能为空'));
				}
				var uPattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/;
				if(uPattern.test(value)){
						callback();
				}else{
						return callback(new Error('账户格式不正确'));
				}
			};
			//验证邮箱
			var checkeEliam = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('邮箱地址不能为空'));
				}
				var uPattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				if(uPattern.test(value)){
						callback();
				}else{
						return callback(new Error('账户格式不正确'));
				}
			};
      return {
        ruleForm2: {
					userName: '',
          userPass: '',
          confirmPwd: '',
					phone: '',//手机码号
					eliam: '',//邮箱地址
        },
        rules2: {
					userName: [
						{ validator: checkUser, trigger: 'blur' }
					],
          userPwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmPwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
					phone: [
						{ validator: checkPhone, trigger: 'blur' }
					],
					eliam: [
						{ validator: checkeEliam, trigger: 'blur' }
					]
        }
      };
    },
    methods: {
			add(){
				this.$refs.baocun.setAttribute("prop",'ruleForm2')
			},
			//注册功能
			register(){
				axios.post('/users/register', {
					userName   : this.ruleForm2.userName,
					userPwd    : this.ruleForm2.userPwd,
					confirmPwd : this.ruleForm2.confirmPwd,
					phone    	 : this.ruleForm2.phone,
					eliam      : this.ruleForm2.eliam,
				}).then((response) => {
					let res = response.data;
					if (res.status == '0') {
						console.log('注册成功')
						console.log(res.result)
						this.$router.push({path: '/regSuc'})
					} else if(res.status == '10020'){
						this.$refs.regText.focus();
						this.ruleForm2.userName = `${this.ruleForm2.userName} 用户名已存在`
						this.$refs.regText.blur();
					}
				})
			},
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						console.log(this.ruleForm2.userName)
						console.log(this.ruleForm2.userPass)
						console.log(this.ruleForm2.confirmPwd)
						console.log(this.ruleForm2.phone)
						console.log(this.ruleForm2.eliam)
						this.register()
						
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 850px;
    display: flex;
    background: #f5f5f5;
    .login-box{
        width: 40%;
				height: 650px;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding-top: 50px;
				border: 1px solid #ccc;
        border-radius: 20px;
        padding: 30px;
				// box-shadow: 0px 0px 10px 5px #aaa;
        .header-container{
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #000;
            background: #fff;
            border-bottom: 1px solid #f1f1f1;
            div{
                width: 50px;
                height: 100px;
                margin-bottom: 20px;
								font-size: 50px;
								display: flex;
								justify-content: center;
								align-items: center;
								padding-bottom: 2px;
								
            }
        }
				.input-container:hover{
					box-shadow: 0px 0px 10px 5px #aaa;
					-webkit-transform: scale(0.6.1);
					-moz-transform: scale(1.1);
					-ms-transform: scale(1.1);
					-o-transform: scale(1.1);
					transition: all .8s;
					margin-bottom: 4px;
					z-index: 9999;
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
                    .input-con{
                        width: 350px;
                    }
									&.input-buttom{
										margin-bottom: 0;
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
