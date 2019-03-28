<template>
    <div class="infoData">
        <header></header>
        <div class="wrap">
            <section class="detail clearFix">
                <div class="directory">
                    <div class="data">
                        <div class="title"><i></i>数据目录</div>
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
                        <div class="title"><i></i>提供部门</div>
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
                    <div class="facility">
                        <span class="firstSort">排序:</span>
                        <a href="javascript:;" :class="{current: index==facilityIndex}" @click="changeInfo(index)" v-for="(item, index) in facilityArr">
                            <i class="iconfont" :class="item.className"></i>
                            <span>{{item.value}}<s v-show="index==facilityIndex && index != 0" class="iconfont" :class="arrowShow?'icon-down':'icon-top'"></s></span>
                        </a>
                    </div>
                    <div class="box">
                        <div class="content">
                            <div class="noData" v-show="dataNum == 0"></div>
                            <ul>
                                <li v-for="(item, index) in dataArr" :key="index">
                                    <div class="source">
                                        <div class="source_img">
                                            <i class="iconfont icon-dashuju"></i>
                                        </div>
                                        <span>{{item.source}}</span>
                                    </div>
                                    <div class="infoName">
                                        <a href="javascript:;" @click="$router.push('/infoDetail')">{{item.title}}</a>
                                        <span>
                                            <i class="branch"><i class="figure iconfont icon-gongan"></i>{{item.game}}</i>
                                            <s><i class="figure iconfont icon-gerenziliao"></i>{{item.department}}</s>
                                        </span>
                                    </div>
                                    <div class="grade">
                                        <p>资源评分：
                                            <el-rate
                                                    :value="item.grade"
                                                    disabled
                                                    text-color="#ff9900"
                                            >
                                            </el-rate>
                                        </p>
                                        <p><i class="iconfont icon-shizhong"></i>更新时间：{{item.time}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="btn">
                            <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="dataNum">
                            </el-pagination>
                        </div>
                    </div>
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
                ],
                facilityArr: [
                    {value: '综合', isSort: false, className: 'icon-yewuguanli'},
                    {value: '更新时间', isSort: false, className: 'icon-shizhong'},
                    {value: '评分', isSort: false, className: 'icon-pingfen'}
                ],
                arrowShow: false,
                changeArrow: [false,false],
                facilityIndex: 0,
                dataNum: 20,
                dataArr: [
                    {
                        source: '数据集',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 1,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: 'API',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 3,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: '数据集',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 1.2,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: 'API',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 3,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: '数据集',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 3,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: 'API',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 2.8,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: '数据集',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 3.7,
                        time: '2019-3-20 09:55:11'
                    },
                    {
                        source: 'API',
                        game: '南通市大数据局',
                        department: '人口',
                        title: '测试资源状态',
                        grade: 3,
                        time: '2019-3-20 09:55:11'
                    }
                ]
            }
        },
        methods: {
            choose (index) {
                this.selectIndex = index
            },
            changeInfo (index) {
                this.facilityIndex = index
                this.arrowShow = true
                this.changeArrow[index] = !this.changeArrow[index]
                this.arrowShow = this.changeArrow[index]
            }
        }
    }
</script>
<style>
    .wrap .el-pagination.is-background .btn-next,
    .wrap .el-pagination.is-background .btn-prev,
    .wrap .el-pagination.is-background .el-pager li {
        background-color: #fff;
    }
    .wrap .el-rate {
        display: inline-block;
        line-height: 15px;
    }
</style>
<style scoped lang="scss">
    .infoData {
        margin-top: -90px;
    }
    header {
        width: 100%;
        height: 90px;
        background: url(../assets/img/topBanner.jpg) no-repeat;
        background-size:100% auto;
    }
    .wrap {
        width: 100%;
        background: #F2F2F2;
    }
    .detail {
        width: 1200px;
        margin: 0 auto;
        padding: 32px 0;
        cursor: pointer;
    .directory {
        display: inline-block;
        width: 300px;
        margin-right: 25px;
    }
    .comprehensive {
        float:right;
        display: inline-block;
        width: calc(1200px - 325px);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
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
    .comprehensive {
    .facility {
        background: #fff;
        width: 100%;
        height: 50px;
        line-height: 50px;
        color:#000;
        font-size: 15px;
        letter-spacing: 2px;
        box-sizing:border-box;
        border-bottom:1px solid #eee;
        text-align: left;
        padding-left: 13px;
    .firstSort {
        margin-right:15px;
    }
    a {
        text-align: center;
        color: #000;
        padding: 6px 12px;
        border-radius: 5px;
        margin:0 23px;
    }
    a.current {
        color: #fff;
        background: #249BF5;
    }
    i {
        font-size: 15px;
        margin-right: 5px;
    }
    s {
        font-size: 15px;
        font-weight: bold;
    }
    }
    .content {
        width: 100%;
        min-height: 320px;
    .noData {
        background: #fff;
        width: 100%;
        min-height: 320px;
        position: relative;
    &:hover {
         background: #F0FBFF;
     }
    &::before {
         content: '';
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         width: 141px;
         height: 132px;
         background: url(../assets/img/nodata2.png) no-repeat;
     }
    }
    ul {
        width: 100%;
    }
    li {
        background: #fff;
        width: 100%;
        height: 143px;
        box-shadow: 0 2px 2px #e1ecf5;
        margin-bottom: 17px;
        text-align: left;
    .source {
        width: 100px;
        float: left;
        text-align: center;
    .source_img {
        margin: 17px auto;
        width: 69px;
        height: 69px;
        background: #64CCFF;
        border-radius: 5px;
        position: relative;
    }
    i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 49px;
        height: 49px;
        font-size:45px;
        line-height: 49px;
    }
    span {
        display: inline-block;
        color: #fff;
        background: #00A5F7;
        width: 48px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        border-radius: 3px;
    }
    }
    .infoName {
        display: inline-block;
        padding-top: 15px;
    a {
        font-size: 18px;
        font-weight: bold;
        color:#000;
        display: block;
        margin-bottom:63px;
    }
    .figure {
        color: #FBB95B;
        font-size: 14px;
        margin-right: 5px;
    }
    .branch {
        margin-right: 80px;
    }
    i,s {
        letter-spacing: 1px;
        line-height: 20px;
        font-size: 12px;
        color: #999999;
    }
    }
    .grade {
        float: right;
        padding: 15px 24px 0 0;
    p:nth-of-type(1) {
        color:#666666;
        font-size: 16px;
        margin-bottom: 60px;
        line-height: 20px;
    i {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 1px;
        vertical-align: top;
        background: url(../assets/img/star-off.png) no-repeat;
    }
    i.half {
        background-image: url(../assets/img/star-half.png)
    }
    i.all {
        background-image: url(../assets/img/star-on.png)
    }
    }
    p:nth-of-type(2) {
        color: #999999;
    i {
        margin-right: 3px;
    }
    }
    }
    }
    }
    .btn {
        text-align: right;
        margin: 20px 0;

    }

    }



</style>