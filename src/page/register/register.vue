<template>
    <div class="login-container">
        <div class="login-bg">
        </div>
        <div class="login-box">
            <div class="header-container">
                <img src="http://img5.imgtn.bdimg.com/it/u=2205424427,3655026688&fm=26&gp=0.jpg" alt="">
                <p>欢迎注册 Eend商城 账号 </p>
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
                        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                        <el-button class="reset-btn" @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
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
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
    height: 750px;
    display: flex;
    //background: #f3f3f3;
    .login-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(http://img5.imgtn.bdimg.com/it/u=3806838678,3106817667&fm=26&gp=0.jpg);
        background-size: 100% 100%;
        z-index: -1;
    }
    .login-box{
        width: 40%;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        background: #f3f3f3;
        padding-top: 50px;
        border-radius: 20px;
        padding: 30px;
        .header-container{
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #000;
            background: #000;
            border-bottom: 1px solid#fff;
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
            background: #000;
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
