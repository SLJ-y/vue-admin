<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li :class="{current:isActive == index}"  v-for="(item, index) in menuTab" :key="item.id" @click="toggleMenu(index)">{{item.txt}}</li>
            </ul>
            <!-- Form 表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
                <label for="">邮箱</label>
                <el-form-item prop="username" class="item-form">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <label for="">密码</label>
                <el-form-item prop="password" class="item-form">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <label for="">验证码</label>
                
                <el-form-item prop="code" class="item-form">
                    <el-row :gutter="10">
                        <el-col :span="15"><el-input v-model.number="ruleForm.code"></el-input></el-col>
                        <el-col :span="9"><el-button type="success" class="block">获取验证码</el-button></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="item-form">
                    <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
    #login {
        background-color: #344a5f;
        height: 100vh;
    }

    .login-wrap {
        padding-top: 180px;
        width: 330px;
        margin: auto;
    }

    .menu-tab {
        text-align: center;
        li {
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 14px;
            color: white;
            cursor: pointer;
        }
    }

    .current {
        background-color: rgba($color: #000000, $alpha: 0.1);
    }

    .login-form {
        margin-top: 29px;
        label {
            display: block;
            font-size: 14px;
            color: #fff;
            margin-bottom: 3px;
        }
    
    }

    .item-form {
        margin-bottom: 13px;
    }

    .block {
        width: 100%;
        display: block;
    }

    .login-btn {
        margin-top: 19px;
    }

</style>

<script>
import {stripscript} from '@/utils/validate';
export default {
    name: "login",
    data() {
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
            if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            } else {
                if (value < 18) {
                    callback(new Error('必须年满18岁'));
                } else {
                    callback();
                }
            }
            }, 1000);
        };
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return{
            menuTab: [
                {txt: "登录"},
                {txt: "注册"}
            ],
            isActive: 0,
            ruleForm: {
                username: '',
                password: '',
                code: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                code: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        // 数据驱动视图渲染
        toggleMenu(index){
            this.isActive = index
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    }
}
</script>