<template>
    <div>
        <header></header>
        <div class="wrap">
            <section class="detail">
                <div class="directory">
                    <div class="data">
                        <div class="title">
                            <i></i>
                            数据目录
                        </div>
                        <div class="card">
                            <div class="selectNav">
                                <a href="javascript:;" @click="choose(index)" :class="{current:selectIndex==index}" v-for="(item, index) in selectCard" :key="index">{{item}}</a>
                            </div>
                            <ul>
                                <li v-for="(item, index) in infoArr[selectIndex]" :key="index">
                                    <a href="javascript:;">{{item.title}}</a>
                                    <i>{{item.num}}</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="department">
                        <div class="title">
                            <i></i>
                            提供部门
                        </div>
                        <div class="card">
                            <ul>
                                <li v-for="(item, index) in departmentArr" :key="index">
                                    <a href="javascript:;">{{item.title}}</a>
                                    <i>{{item.num}}</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="comprehensive">

                </div>
            </section>
        </div>

        <foot></foot>
    </div>
</template>

<script>
    import Footer from '@/components/footer'
    export default {
        components: {
            foot: Footer
        },
        data () {
            return {
                selectCard: ['主题分类', '行业分类', '数据领域'],
                selectIndex: 0,
                infoArr:[
                    [
                        {title: '人口信息数据',num: 6},
                        {title: '公安信息数据',num: 2},
                        {title: '大数据分析',num: 8}
                    ],
                    [
                        {title: '公安信息数据',num: 3},
                        {title: '大数据分析',num: 10}
                    ],
                    [
                        {title: '人口信息数据',num: 85}
                    ]
                ],
                departmentArr: [
                    {title: '公安局',num: 6},
                    {title: '财政局',num: 2},
                    {title: '民政局',num: 8}
                ]
            }
        },
        methods: {
            choose (index) {
                this.selectIndex = index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap {
        width: 100%;
        background: #F2F2F2;
    }
    header {
        width: 100%;
        height: 90px;
        background: url(../assets/img/topBanner.jpg) no-repeat;
        background-size:100% auto;
    }
    .detail {
        width: 1200px;
        margin: 0 auto;
        padding: 32px 0;
        cursor: pointer;
    }
    .directory>div {
        width: 300px;
        box-shadow: 0 2px 5px rgba(0,0,0,.1);
    }
    .directory .title {
        width: 100%;
        height: 50px;
        background-size: cover !important;
        line-height: 50px;
        color:#fff;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 2px;
    }
    .directory .title i {
        vertical-align: middle;
        display: inline-block;
        width: 18px;
        height: 16px;
        margin-right: 10px;
    }
    .data .title {
        background: url(../assets/img/hotBG.png) no-repeat;
        i {
            background: url(../assets/img/banner_15.png);
        }
    }
    .department .title {
        background: url(../assets/img/newBG.png) no-repeat;
        i {
            background: url(../assets/img/banner_32.png);
        }
    }
    .directory .card {
        box-sizing: border-box;
        border-top: 1px solid #D9D9D9;
        border-bottom: 1px solid #F2F2F2;
        min-height: 320px;
        background: #fff;
        margin-bottom: 32px;
        padding: 10px 13px;
    }
    .data .card {
        margin-bottom: 32px;
        padding: 0 13px;
        text-align: left;
    }
    .selectNav {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .selectNav a {
        text-align: center;
        display: inline-block;
        width: 76px;
        height: 28px;
        border: 1px solid #37B0FF;
        border-radius: 5px;
        color: #088FFF;
        margin: 18px 0;
        line-height: 28px;
        padding: 0 2px;
        letter-spacing: 1px;
        font-size: 14px;
    }
    .selectNav a.current {
        background: #28A7FF;
        color:#fff;
    }
    .card {
        ul {
            width: 100%;
            height: 100%;
        }
        li {
            text-align: left;
            font-size: 14px;
            line-height: 32px;
            padding-left: 14px;
            position: relative;
        i {
            float: right;
        }
        }
        li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 6px;
            height: 6px;
            background: #3CACF8;
            border-radius: 50%;
            margin-top: -3px;
        }
        a {
            color: #666666;
            position: relative;
        }
        li a:hover {
            color: #3CACF8;
        }
        a.hot::after {
            content: '';
            width: 24px;
            height: 24px;
            background: url(../assets/img/hotIcon.png) no-repeat;
            position: absolute;
            top: -8px;
            right: -35px;
        }
    }


</style>