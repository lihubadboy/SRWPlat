<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <Row type="flex" justify="center" align="middle" class="full-row">
            <Col span="12" class="full-col">
                <Carousel loop autoplay :autoplay-speed="5000" dots="none" arrow="never" class="full-carousel">
                    <CarouselItem>
                        <div class="carousel-item">
                            <img src="../images/c0.png">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel-item">
                            <img src="../images/c1.png">
                        </div>
                    </CarouselItem>
                </Carousel>
                <p class="copy-info">全国地震标准化技术委员会 CopyRight © 2018 京ICP备10011451号-26</p>
            </Col>
            <Col span="12" class="full-col">
                <div class="login-con">
                    <Card :bordered="false" dis-hover class="login-card">
                        <p slot="title" class="login-header">
                            欢迎登录
                        </p>
                        <div class="form-con">
                            <Form ref="loginForm" :model="form" :rules="rules">
                                <FormItem prop="userName">
                                    <Input v-model="form.userName" size="large" placeholder="请输入用户名" clearable>
                                        <span slot="prepend">
                                            <Icon :size="16" type="person"></Icon>
                                        </span>
                                    </Input>
                                </FormItem>
                                <FormItem prop="password">
                                    <Input type="password" v-model="form.password" size="large" placeholder="请输入密码" clearable>
                                        <span slot="prepend">
                                            <Icon :size="14" type="locked"></Icon>
                                        </span>
                                    </Input>
                                </FormItem>
                                <FormItem label="记住账号">
                                    <i-switch v-model="form.switch">
                                    </i-switch>
                                    <Button type="text" class="fg-pwd">忘记密码</Button>
                                </FormItem>
                                <FormItem>
                                    <Button @click="handleSubmit" type="primary" size="large" long>登录</Button>
                                </FormItem>
                            </Form>
                            <p class="login-tip">尚未注册账户？马上注册</p>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            form: {
                userName: 'iview_admin',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        }
    }
};
</script>

<style>

</style>
