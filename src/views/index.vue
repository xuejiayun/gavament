<template>
    <div>
        <header>
            <div class="wrapper">
                <div class="logo"></div>
                <div class="menu">
                    <div class="nav">
                        <router-link to="/home" tag="a">首页</router-link>
                        <router-link to="/data" tag="a">数据集</router-link>
                        <router-link to="/file" tag="a">文件</router-link>
                        <router-link to="/service" tag="a">API服务</router-link>
                    </div>
                    <div class="search">
                        <input type="text" placeholder="请输入数据/文件/API名称关键词…">
                        <span>搜索</span>
                    </div>

                </div>
                <div class="login">
                    <router-link to="login" >登录</router-link>
                </div>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    header {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 90px;
        background: rgba(0,0,0,.15);
        z-index: 10;
        .wrapper {
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            position: relative;
            .logo {
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: -13px;
                width: 288px;
                height: 26px;
                background: url(../assets/img/logo.png) no-repeat;
            }
        }
        .menu {
            position: absolute;
            left: 50%;
            top: 0;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            a {
                letter-spacing: 2px;
                text-decoration: none;
                font-weight: 600;
                font-size: 20px;
                display: inline-block;
                padding: 0 30px;
                line-height: 36px;
                text-align: center;
                color: #fff;
                cursor: pointer;
                text-shadow: 0 1px 1px rgba(0,0,0,.2);
                border-top: 3px solid transparent;
            }
            a:hover {
                color: #19AFFE;
            }
            a.router-link-active {
                color: #19AFFE;
                border-top-color: #fff ;
            }
        }
        .search {
            margin-top: 8px;
            width: 100%;
            height: 32px;
            input {
                background: rgba(255,255,255,0.8);
                outline: none;
                border: 1px solid #89cdfd;
                height: 28px;
                line-height: 32px;
                border-radius: 20px 0 0 20px;
                width: calc(100% - 105px);
                float: left;
                border-right:none;
                padding-left: 20px;
                font-size: 15px;
            }
            span {
                line-height: 32px;
                display: inline-block;
                float: right;
                width: 84px;
                border-radius: 0 20px 20px 0;
                color:#fff;
                letter-spacing: 2px;
                box-sizing: border-box;
                padding-left: 25px;
                background: #f7b14f;
                cursor: pointer;
                position: relative;
                text-shadow: 0 1px 1px rgba(0,0,0,.1);
            }
            span::after {
                content: '';
                position: absolute;
                left: 13px;
                top: 50%;
                transform: translateY(-50%);
                width: 15px;
                height: 15px;
                background: url(../assets/img/sousuo.png) no-repeat;
            }
        }
        .login {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            a {
                letter-spacing: 2px;
                font-size: 15px;
                color:#fff;
                text-decoration: none;
                text-shadow: 0 1px 1px rgba(0,0,0,.4);
                position: relative;
            }
            a::before {
                content: '';
                position: absolute;
                left: -30px;
                top: 50%;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                background: url(../assets/img/login.png) no-repeat;
                background-size: cover;
            }
        }
    }

</style>