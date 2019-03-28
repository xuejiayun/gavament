<template>
    <div class="home">
        <!--banner开始-->
        <div class="banner">
            <el-carousel :autoplay=false :loop=false :height="bannerHeight+'px'">
                <el-carousel-item v-for="(item,index) in bannerArr" :key="index" >
                    <img ref="imgHeight" :src="item.src" alt="" @load="imgLoad">
                    <div class="info">
                        <span v-for="(infoItem, index) in item.info" :style="{fontSize:bannerSize+'px'}">{{infoItem}}</span>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="bannerIcon">
                <div class="iconItem" v-for="(item, index) in bannerIcon" :key="index">
                    <i :style="{backgroundImage:'url('+item.src+')'}"></i>
                    <span>{{item.info[0]}}</span>
                    <span>{{item.info[1]}}</span>
                </div>
            </div>
        </div>
        <!--banner结束-->

        <!--分类开始-->
        <div class="classify">
            <div class="nav">
                <div class="smallClassify">
                    <a href="javascript:;" v-for="(item, index) in navArr" :class="{current:index==showClassify}" @click="showContent(index)">{{item}}</a>
                </div>
                <div class="content">
                    <div class="boxContent current" ref="boxContent">
                        <div class="item" v-for="(item, index) in classifyArr[showClassify]">
                            <div class="infoContent">
                                <div class="menu_item">
                                    <div class="menu_link"></div>
                                </div>
                                <div class="iconBg">
                                    <i class="iconfont" :class="item.icon"></i>
                                </div>
                                <span class="title">{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="dataLink">
                        <div class="itemInfo" v-for="(item, index) in listArr" :key="index">
                            <div class="title"><i></i>{{item.title}}</div>
                            <div class="list">
                                <div class="subtitle">{{item.subtitle}}</div>
                                <ul>
                                    <li v-for="(value,index) in item.articleArr" :key="index">
                                        <a @click="$router.push('/infoDetail')" href="javascript:;" :class="{hot:value.isHot}">{{value.title}}</a>
                                        <i href="javascript:;">{{value.num}}</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--分类结束-->

        <!--footer开始-->
        <foot></foot>
        <!--footer结束-->

    </div>
</template>
<script>
    import Footer from '@/components/footer'
    export default {
        components: {foot: Footer},
        data () {
            return {
                bannerArr: [
                    {src:require('../assets/img/banner1.jpg'),info: ['定位新时代', '聚焦大数据']},
                    {src:require('../assets/img/banner2.jpg'),info: ['专注数据共享', '构建智慧南通']},
                    {src:require('../assets/img/banner3.jpg'),info: ['挖掘数据价值', '共创智慧南通']}
                ],
                bannerHeight: 0,
                bannerSize: 0,
                bannerIcon: [
                    {src:require('../assets/img/DATA.png'),info: ['数据集', '6']},
                    {src:require('../assets/img/FILE.png'),info: ['文件', '2']},
                    {src:require('../assets/img/API.png'),info: ['API', '5']}
                ],
                navArr: ['主题分类', '行业分类', '数据领域', '部门分类'],
                classifyArr: [
                    [{title: '人口信息',icon: 'icon-gerenziliao'}],
                    [{title: '数据分析',icon: 'icon-dashuju'},{title: '公安局',icon: 'icon-gongan'}],
                    [{title: '公安局',icon: 'icon-gongan'}],
                    [{title: '数据分析',icon: 'icon-dashuju'},{title: '人口信息',icon: 'icon-gerenziliao'},{title: '公安局',icon: 'icon-gongan'}]
                ],
                showClassify: 0,
                listArr: [
                    {
                        title:'热点数据集',
                        subtitle: '订购量',
                        articleArr: [
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: false,  num: '1'},
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: false,  num: '1'},
                            {title: '测试数据入库已经作废', isHot: true,  num: '1'},
                            {title: '测试数据入库', isHot: false, num: '1'},
                            {title: '测试数据入库', isHot: true,  num: '1'},
                            {title: '测试数据入库', isHot: true, num: '1'}
                        ]
                    },
                    {title:'最新资源', subtitle: '更新时间',articleArr: [
                            {title: '测试数据入库', isHot: false,num: '2019-03-22'},
                            {title: '测试数据入库', isHot: true, num: '2019-03-22'},
                            {title: '测试数据入库', isHot: false,num: '2019-03-22'},
                            {title: '测试数据入库', isHot: true, num: '2019-03-22'},
                            {title: '测试数据入库', isHot: true, num: '2019-03-22'},
                            {title: '测试数据入库', isHot: false,num: '2019-03-22'},
                            {title: '测试数据入库', isHot: true, num: '2019-03-22'},
                            {title: '测试数据入库', isHot: false,num: '2019-03-22'}
                        ]},
                    {title:'热点API服务', subtitle: '次 / 天',articleArr: [
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: true, num: '1'},
                            {title: '测试数据入库', isHot: false, num: '1'},
                            {title: '测试数据入库', isHot: false, num: '1'},
                            {title: '测试数据入库', isHot: false, num: '1'}
                        ]}
                ]
            }
        },
        created () {

        },
        watch: {
            bannerHeight () {
                this.bannerHeight = this.$refs.imgHeight[0].height
            }
        },
        methods: {
            imgLoad () {
                this.$nextTick(() => {
                    this.bannerHeight = this.$refs.imgHeight[0].height
                    this.bannerSize = this.bannerHeight * (45 / 375)
                })
            },
            showContent (index) {
                this.showClassify = index;
                this.$refs.boxContent.classList.remove('current')
                setTimeout(() => {
                    this.$refs.boxContent.classList.add('current')
                },50);

            }
        },
        mounted () {
            this.imgLoad()
            let _this = this
            window.addEventListener('resize', () => {
                if (_this.$refs.imgHeight.length > 0) {
                    _this.bannerHeight = _this.$refs.imgHeight[0].height
                    _this.imgLoad()
                }
            },false)
        }
    }
</script>
<style lang="scss">
    /*--修改banner条上面的按钮--*/
    .home .el-carousel__indicators {
        bottom: 66px;
        .is-active .el-carousel__button {
            background-color: #FDC100;
            box-shadow: 0 1px 2px rgba(13, 23, 255, 0.94);
        }
        .el-carousel__button {
            height: 4px;
            width: 40px;

        }
    }
    .home .el-carousel__container button {
        display: none !important;
    }
</style>
<style scoped lang="scss">
    .home {
        margin-top: -90px;
    }
    .home img {
        height: auto;
        width: 100%;
        min-height: 245px;
        min-width: 1200px;
    }
    .home .info {
        min-width: 590px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-40%);
    }
    .home .info span {
        font-weight: bold;
        font-size: 45px;
        line-height: 1;
        color:#fff;
        letter-spacing: 6px;
        text-shadow: 2px 0 1px #188FC8,-2px 0 1px #188FC8,0 2px 1px #188FC8,0 -2px 1px #188FC8,0 2px 5px rgba(0,0,0,.6);
    }
    .home .info span:nth-of-type(1) {
        margin-right: 60px;
    }
    .home .banner {
        position: relative;
    }
    .home .bannerIcon {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,.3);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        z-index: 2;
        height: 57px;
        min-width: 590px;
        .iconItem {
            height: 100%;
            position: relative;
            cursor: pointer;
            display: inline-block;
        }
        .iconItem:not(:last-child)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -17.5px;
            height: 35px;
            width: 2px;
            background: #9BC2D9;
        }
        .iconItem i {
            content: '';
            position: absolute;
            top: 50%;
            left: 48px;
            transform: translateY(-50%);
            width: 38px;
            height: 38px;
            transition: all 0.2s;
        }
        .iconItem:hover i {
            left: 38px;
        }
        .iconItem span {
            display: block;
            padding: 0 48px 0 107px;
            font-size: 16px;
            font-weight: bold;
            text-align: left;
        }
        .iconItem span:nth-of-type(1) {
            color: #fff;
            line-height: 30px;
            letter-spacing: 2px;
            text-shadow: 0 1px 5px rgba(0,0,0,.5);
        }
        .iconItem span:nth-of-type(2) {
            color: #EFBC0D;
            font-size: 20px;
        }
    }
    .home {
        .classify {
            background: url(../assets/img/ditu1.png) no-repeat;
            background-size: 100%;
            /*background-position: center bottom;*/
            padding: 1px 0;
        }
        .smallClassify {
            display: inline-block;
            height: 72px;
            border-bottom: 1px solid #E0E0E0;
        }
        .smallClassify a{
            display: inline-block;
            font-size: 18px;
            padding: 0 56px;
            line-height: 72px;
            color:#000;
            /*border-bottom: 3px solid transparent;*/
            /*transition: border 0.2s;*/
            letter-spacing: 2px;
            position: relative;
        }
        .smallClassify a::after {
            content:'';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 0;
            height: 3px;
            background: transparent;
            transition: all 0.3s;
        }
        .smallClassify a.current {
            color: #0098EA;
        }
        .smallClassify a.current::after {
            width: 100%;
            background: #0098EA;
        }
        .content {
            width: 1200px;
            margin: 24px auto 0;
            min-height: 376px;
            overflow: hidden;
            .boxContent {
                margin: 0 auto;
                width: 1200px;
                transform: translateX(-50%) translateZ(0.1px);
                opacity: 0;
                display: flex;
                align-items: flex-start;
                vertical-align: center;
                flex-wrap: wrap;
            }
            .boxContent.current {
                transform: translateX(0) translateZ(0.1px);
                transition: transform 0.3s;
                opacity: 1;
            }
            .item {
                width: calc(90% / 6);
                height: 180px;
                cursor: pointer;
                transition-delay: 0.2s;
                margin: 5px 10px;
                /*transform: scale3d(0,0,1);*/
            }
            .menu_item, .menu_link{
                width: 100%;
                height: 100%;
                transition: color 0.3s;
                position: absolute;
                left: 0;
                top: 0;
            }
            .menu_item::before ,
            .menu_item::after ,
            .menu_link::before ,
            .menu_link::after  {
                content: '';
                position: absolute;
                background: #31acff;
                transition: transform 0.1s;
                -webkit-transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
                transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
            }
            .menu_item::before ,
            .menu_item::after  {
                top: 0;
                width: 2px;
                height: 100%;
                -webkit-transform: scale3d(1, 0, 1);
                transform: scale3d(1, 0, 1);
            }
            .menu_item::before {
                left: 0;
                transform-origin: 50% 100%;
                transition-delay: 0.2s;
            }
            .menu_item::after {
                right: 0;
                transform-origin: 50% 0;
            }
            .menu_link::before ,
            .menu_link::after  {
                left: 0;
                height: 2px;
                width: 100%;
                -webkit-transform: scale3d(0, 1, 1);
                transform: scale3d(0, 1, 1);
            }
            .menu_link::before {
                top: 0;
                transform-origin: 0 50%;
                transition-delay: 0.1s;
            }
            .menu_link::after {
                bottom: 0;
                transform-origin: 100% 50%;
                transition-delay: 0.3s;
            }
            .infoContent {
                width: 100%;
                height: 100%;
                position: relative;
                i {
                    font-size: 35px;
                    text-align: center;
                    line-height: 70px;
                }
                span {
                    position: absolute;
                    top: 70%;
                    left: 0;
                    width: 100%;
                    text-align: center;
                }
            }
            .item:hover .menu_link::after {
                transition-delay:0s;
            }
            .item:hover .menu_item::before {
                transition-delay:0s;
            }
            .item:hover .menu_link::before {
                transition-delay:0.2s;
            }
            .item:hover .menu_item::after {
                transition-delay:0.3s;
            }
            .item:hover .menu_item::after,
            .item:hover .menu_item::before,
            .item:hover .menu_link::after,
            .item:hover .menu_link::before{
                transform: scale3d(1,1,1);
            }
            .item:hover {
                box-shadow: 1px 1px 10px rgba(62, 172, 255, 0.25);
            }
            .item:hover .iconBg {
                transform: translate(-50%,-40%);
            }
            .iconBg {
                position: absolute;
                left: 50%;
                top: 40%;
                transform: translate(-50%,-50%);
                width: 66px;
                height: 70px;
                background: url(../assets/img/classifbg.png);
                transition: all 0.3s;
            }
            .dataLink {
                margin: 24px 0 40px;
            }
            .itemInfo:hover {
                box-shadow: 0 2px 10px rgba(0,0,0,.4);
            }
            .dataLink {
                display: flex;
                justify-content: space-around;
                align-items: center;
                .itemInfo {
                    cursor: pointer;
                    width: 390px;
                    transition: 0.2s;
                }
                .title {
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    font-size: 21px;
                    color: #fff;
                    font-weight:bold;
                    position: relative;
                    letter-spacing: 2px;
                    text-shadow: 0 1px 2px rgba(29, 54, 255, 0.3), 0 1px 3px rgba(0,0,0,.5);
                }
                .itemInfo:nth-of-type(1) .title {
                    background: url(../assets/img/hotBG.png) no-repeat;
                }
                .itemInfo:nth-of-type(2) .title {
                    background: url(../assets/img/newBG.png) no-repeat;
                }
                .itemInfo:nth-of-type(3) .title {
                    background: url(../assets/img/tuijianBG.png) no-repeat;
                }
                .itemInfo .title i {
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                    transition: transform 0.5s ease-in-out;
                }
                .title:hover i {
                    transform: rotate(360deg);
                }
                .itemInfo:nth-of-type(1) .title i {
                    width: 51px;
                    height: 55px;
                    background: url(../assets/img/redianshuju.png) no-repeat;
                }
                .itemInfo:nth-of-type(2) .title i {
                    width: 52px;
                    height: 55px;
                    background: url(../assets/img/tuijianshuju.png) no-repeat;
                }
                .itemInfo:nth-of-type(3) .title i {
                    width: 51px;
                    height: 56px;
                    background: url(../assets/img/hotapi.png) no-repeat;
                }
                .list {
                    width: 100%;
                    height: 306px;
                    box-sizing: border-box;
                    border: 1px solid #EEEEEE;
                    padding: 0 18px;
                }
                .subtitle {
                    text-align: right;
                    color: #999999;
                    font-size: 12px;
                    line-height: 45px;

                }
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
                a:hover {
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
            .itemInfo:nth-of-type(1) ul i,
            .itemInfo:nth-of-type(3) ul i {
                width: 48px;
                height: 20px;
                background: #5DBCFF;
                color: #fff;
                line-height: 20px;
                text-align: center;
                border-radius: 5px;
                margin: 6px 0;
            }
            .itemInfo:nth-of-type(3) ul i {
                background: #71DE9A;
            }
        }
    }
</style>