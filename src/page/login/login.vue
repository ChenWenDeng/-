<template>
    <div class="login-container">
        <div class="login-bg">
        </div>
        <div class="login-box">
            <div class="header-container">
                <img src="http://img5.imgtn.bdimg.com/it/u=2205424427,3655026688&fm=26&gp=0.jpg" alt="">
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
                    <el-form-item class="input-box" label="确认密码" prop="checkPass">
                        <el-input class="input-con" type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-box">
                        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button class="reset-btn" @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账户不能为空'));
        }
        var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        if(uPattern.test(value)){
            callback();
        }else{
            return callback(new Error('账户格式不正确'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
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
            { validator: checkAge, trigger: 'blur' }
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
								//保存用户名在 nickName 中
								this.nickName = res.result.userName;
								//登录成功跳转到首页 并把用户名带过去
								this.$router.push({path:'/',query: {userName: this.nickName}});
							}else{
								this.open6()
							}
						})
							console.log(this.ruleForm2.name)
							console.log(this.ruleForm2.pass)
							console.log(this.ruleForm2.checkPass)
          } else {
            this.open4()
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
			open4() {
				this.$notify({
					title: '警告',
					message: '请填写符合格式的用户名或密码',
					type: 'warning'
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
    .login-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543990899137&di=8a24e13ad5832462b00396e934fb3eda&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F810a19d8bc3eb135237e1570a11ea8d3fc1f44bb.jpg);
        background-size: 100% 100%;
        z-index: -1;
    }
    .login-box{
        width: 40%;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        background: #000;
        padding-top: 50px;
        border-radius: 20px;
        padding: 30px;
        .header-container{
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            img{
                width: 50px;
                height: 50px;
                border: 2px solid #fff;
                margin-bottom: 10px;
            }
        }
        .input-container{
            width: 100%;
            padding: 20px;
            background: #f3f3f3;
            .form-container{
                width: 100%;
                .input-box{
                    display: flex;
                        justify-content: space-between;
                    .input-con{
                        width: 350px;
                    }
                }
                .login-btn,.reset-btn{
                    width: 200px;
                }
            }
        }
    }
}
</style>
