<template>
    <div class="login">
        <header>
            <div>
                <div class="logo"></div>
                <div class="nav">
                    <help-pop class="helpPop" :eachHelp="helpInfo"></help-pop>
                    <a href="javascript:;" @click="$router.push('./')">返回首页</a>
                </div>
            </div>
        </header>
        <section>
            <div class="content">
                <div class="left">
                    <div class="loginTitle">
                        <span>账号密码登录</span>
                    </div>
                    <form action="">
                        <div class="item">
                            <input type="text" placeholder="请输入用户名">
                            <i class="iconfont icon-denglu"></i>
                        </div>
                        <div class="item">
                            <input type="password" placeholder="6-16位密码，区分大小写">
                            <i class="iconfont icon-mima"></i>
                        </div>
                        <div class="spe">
                            <div class="item">
                                <input type="text" placeholder="验证码">
                                <i class="iconfont icon-zhucedengluyanzhengma"></i>
                            </div>
                            <div class="code"></div>
                        </div>
                        <div class="item submitAdd">登录</div>
                    </form>
                </div>
                <div class="right">
                    <div class="loginTitle">
                        <span>产品介绍</span>
                    </div>
                    <p>
                        请输入用户名和密码登录，接入单位的初始用户名和密码由大数据管理局负责分配，如果您忘记了登录名或者密码请联系大数据管理局处理。
                    </p>
                </div>
            </div>
        </section>
        <foot class="speFooter"></foot>
    </div>
</template>

<script>
    import Foot from '@/components/footer'
    import HelpPop from '@/components/helpPop'
    export default {
        components: {
            HelpPop,
            Foot
        },
        data () {
            return {
                helpInfo: {
                    title: '用户指南',
                    className: 'iconfont icon-compass',
                    value: '用户指南',
                    helpIndex: 0,
                    isGuide: true
                }
            }
        }
    }
</script>
<style>
    .login .el-button--text {
        color: #fff;
        text-shadow: 0 2px 2px rgba(0,0,0,.9);
        font-size: 16px;
    }
    .login .el-button--text:hover,
    .login .el-button--text:focus{
        color: #fff;
    }
</style>
<style scoped lang="scss">
    header {
        height: 90px;
        width: 100%;
        background: url(../assets/img/banner.png) no-repeat;
        background-size: cover;
        background-position: center top;
        transition:all 0.3s;
    }
    header:hover {
        background-position-y: bottom;
    }
    header>div {
        width: 1200px;
        margin: 0 auto;
    }
    .login {
        .logo {
            width: 288px;
            height: 26px;
            background: url(../assets/img/logo.png) no-repeat;
            float: left;
            margin-top: 32px;
        }
        .nav {
            float: right;
        }
        a{
            line-height: 90px;
            color: #fff;
            font-size: 15px;
            text-shadow: 0 2px 2px rgba(0,0,0,.9);
            margin: 0 8px;
        }
        .helpPop {
            display: inline-block;
            color: #fff;
            font-size: 15px;
        }
        section {
            position: absolute;
            left: 0;
            top: 90px;
            right: 0;
            bottom: 86px;
            background: url(../assets/img/loginBg.jpg) no-repeat;
            background-size: cover;
            .content {
                box-sizing: border-box;
                width: 800px;
                height: 380px;
                padding: 32px 0;
                background: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                justify-content: space-between;
                box-shadow: 0 -15px 30px rgba(204, 204, 204, 0.6);
                border-radius: 10px;
            }
            .left {
                width: 60%;
                height: 100%;
                border-right: 1px solid #ddd;
                padding: 0 40px 0 60px;
                box-sizing: border-box;
            }
            .right {
                width: 40%;
                height: 100%;
                padding: 0 40px 0 60px;
                box-sizing: border-box;
                p {
                    padding: 10px 0;
                    color: #999;
                    line-height: 26px;
                    font-size: 14px;
                    text-align: left;
                }
                /*background: lightskyblue;*/
            }
            .loginTitle {
                border-bottom: 1px solid #ddd;
                height: 44px;
                text-align: left;
                box-sizing: border-box;
                span {
                    display: inline-block;
                    line-height: 44px;
                    height: 100%;
                    width: 150px;
                    letter-spacing: 1px;
                    padding-left: 10px;
                    box-sizing: border-box;
                    /*text-align: center;*/
                    color: #1190ED;
                    border-bottom: 2px solid #1190ED;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .spe {
                display: flex;
                justify-content: space-between;
                margin: 20px 0;
            }
            .spe .item {
                width: 260px;
                margin: 0;
            }
            .spe input {
                width: 215px;
            }
            .spe .code {
                width: 100px;
                border: 1px solid #DDDDDD;
                height: 48px;
                display: inline-block;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 7px 5px;
            }
            .code img {
                height: 100%;
            }
            .item {
                width: 380px;
                height: 48px;
                box-sizing: border-box;
                border: 1px solid #DDDDDD;
                margin: 20px 0;
                border-radius: 3px;
            }
            i {
                display: inline-block;
                width: 42px;
                height: 100%;
                border-right: 1px solid #ddd;
                box-sizing: border-box;
                float: left;
                font-size: 30px;
                line-height: 48px;
                color: #CBCBCB;
                transition: 0.3s;
            }
            input {
                background: transparent;
                box-sizing: border-box;
                border: 0;
                outline: none;
                height: 100%;
                width: 335px;
                float: right;
                font-size: 16px;
                padding-left: 16px;
            }
            input:focus + i {
                color:#1190ED;
            }
            .submitAdd {
                border:none;
                background: #1190ED;
                text-align: center;
                line-height: 48px;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                transition: 0.3s;
                box-shadow:0 1px 5px rgba(0,0,0,.2);
                animation:bluePulse 1.5s infinite;
            }
        }
        .speFooter {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .submitAdd:hover {
            background: rgba(17, 144, 273, .9);
            animation:none;
            box-shadow:0 2px 20px rgba(17, 144, 273, .9);
        }
    }
    @keyframes bluePulse {
        0%,100%{
            background: #1190ED;
            box-shadow:0 1px 5px rgba(0,0,0,.2);
        }
        50% {
            background: rgba(17, 144, 273, .9);
            box-shadow:0 2px 10px rgba(17, 144, 273, .9);
        }
    }


</style>