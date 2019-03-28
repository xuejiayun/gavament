<template>
    <div class="infoDetail">
        <header></header>
        <div class="wrapper">
            <div class="content">
                <div class="describe">
                    <div class="mainInfo">
                        <div class="top">
                            <span>资源描述信息</span>
                            <help-pop class="helpPop" :eachHelp="helpInfo"></help-pop>
                        </div>
                        <div class="bottom">
                            <div class="test">
                                <div class="main">
                                    <div class="middle">
                                        <span>{{message.title}}</span>
                                        <div class="grade">
                                            <i>资源评分：</i>
                                            <el-rate
                                                    :value="message.grade"
                                                    disabled
                                                    text-color="#ff9900"
                                            >
                                            </el-rate>
                                        </div>
                                        <div class="message">
                                            <div>
                                                <p>主题分类：{{message.theme}}</p>
                                                <p>行业分类：{{message.industry}}</p>
                                                <p>数据领域：{{message.field}}</p>
                                                <p>联系方式：{{message.telephone}}</p>
                                            </div>
                                            <div>
                                                <p>提供部门：{{message.game}}</p>
                                                <p>资源共享属性：{{message.share}}</p>
                                                <p>更新周期：{{message.updateTime}}</p>
                                                <p>最后更新时间：{{message.lastTime}}</p>
                                            </div>
                                            <div>
                                                <p class="spe">资源标识符：{{message.identification}}</p>
                                                <p>数据创建时间：{{message.createTime}}</p>
                                                <p>联系人：{{message.contacts}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="left">
                                    <div class="imgBox">
                                        <i class="iconfont icon-dashuju"></i>
                                    </div>
                                    <span>{{message.source}}</span>
                                </div>
                                <div class="right">
                                    <el-button type="primary">订阅</el-button><el-button type="success">收藏</el-button><el-button type="info">下载</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sheet">
                        <div class="choose">
                            <span :class="{current: titleIndex==index}"  @click="changeView(index)" v-for="(item, index) in titleArr">{{item}}</span>
                        </div>
                        <i v-if="tableData.length==0"></i>
                        <div class="form">
                            <el-table
                                    v-if="isShow"
                                    :data="tableData"
                                    border
                                    style="width: 100%">
                                <el-table-column
                                        prop="chineseName"
                                        label="中文名称">
                                    <!--width="180"-->
                                </el-table-column>
                                <el-table-column
                                        prop="englishName"
                                        label="英文名称">
                                </el-table-column>
                                <el-table-column
                                        prop="code"
                                        label="编码">
                                </el-table-column>
                                <el-table-column
                                        prop="type"
                                        label="类型">
                                </el-table-column>
                                <el-table-column
                                        prop="length"
                                        label="长度">
                                </el-table-column>
                                <el-table-column
                                        prop="identification"
                                        label="数据元标识">
                                </el-table-column>
                                <el-table-column
                                        prop="isKey"
                                        label="是否主键">
                                </el-table-column>
                            </el-table>
                        </div>
                        <el-pagination
                                v-if="isShow"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[10]"
                                :page-size="10"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="14">
                        </el-pagination>
                        <!--<data-img :id=""></data-img>-->

                    </div>
                    <div class="assess">
                        <p>共0条评价</p>
                    </div>
                </div>
                <div class="relevant">
                    <div class="related">
                        <div class="title">
                            <span><i class="iconfont icon-yewuguanli"></i>相关资源</span>
                            <span>更新日期</span>
                        </div>
                        <div class="file">
                            <i v-if="fileOneArr.length==0"></i>
                        </div>
                    </div>
                    <div class="recommend">
                        <div class="title">
                            <span><i class="iconfont icon-wenjianjia"></i>推荐资源</span>
                            <span>更新日期</span>
                        </div>
                        <div class="file">
                            <i v-if="fileTwoArr.length==0"></i>
                            <a v-if="fileTwoArr.length>0" href="javascript:;" v-for="(item, index) in fileTwoArr">
                                <span>{{item.title}}</span>
                                <span>{{item.time}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>

    import Foot from '@/components/footer'
    import HelpPop from '@/components/helpPop'
    // import DataImg from '@/components/dataImg'
    export default {
        components: {
            Foot,
            HelpPop
            // DataImg
        },
        data () {
            return {
                helpInfo: {
                    title: '帮助说明',
                    className: 'el-icon-question',
                    value: '帮助',
                    helpIndex: 1,
                    isGuide: false
                },
                message: {
                    source: 'API',
                    title: '测试数据入库',
                    grade: 3.2,
                    theme: '人口信息',
                    game: '大数据局',
                    industry: '理发人口',
                    share: '有条件共享',
                    createTime: '2019-03-21 17:20:10',
                    field: '人口',
                    updateTime: '实时',
                    lastTime: '2019-03-22',
                    contacts: 'tgb',
                    telephone: '15851023955',
                    identification: '52364448we545ewirwejrfef21bf01055'
                },
                tableData: [
                    {
                        chineseName: '数据',
                        englishName: 'data',
                        code: '5260',
                        type: '文本',
                        length: 10,
                        identification: '--',
                        isKey: '是'
                    },
                    {
                        chineseName: '数据',
                        englishName: 'data',
                        code: '5260',
                        type: '文本',
                        length: 10,
                        identification: '--',
                        isKey: '是'
                    }
                ],
                currentPage4: 1,
                isShow: true,
                titleIndex: 0,
                titleArr: ['元数据信息', '数据图谱'],
                fileOneArr: [],
                fileTwoArr: [
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数测试测试测试', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'},
                    {title: '测试数据连接次数', time: '2019-03-25'}
                ]
            }
        },
        methods: {
            changeView (index) {
                this.titleIndex = index
                this.isShow = index==0?true:false
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
<style>
    .infoDetail .el-button {
        width: 90px;
        margin-bottom: 5px;
    }
    .infoDetail .el-button+.el-button {
        margin: 0 0 5px 0;
    }
    .infoDetail .el-rate {
        margin-top: -3px;
        display: inline-block;
        vertical-align: middle;
    }
    .infoDetail .el-table td,.infoDetail .el-table th.is-leaf {
        text-align: center;
    }
    .infoDetail .has-gutter th {
        background: #EFF8FD;
        color: #1590F6;
    }
</style>
<style scoped lang="scss">
    header {
        width: 100%;
        height: 90px;
        background: url(../assets/img/topBanner.jpg) no-repeat;
        background-size:100% auto;
    }
    .infoDetail  {
        margin-top:-90px;
        .wrapper {
            width: 100%;
            min-height: 500px;
            background: #F2F2F2;
        }
        .content {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding-top: 32px;
        }
        .describe {
            width: 890px;
            .mainInfo {
                margin: 0 0 22px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                width: 100%;
                height: 340px;
                background: #fff;
                box-shadow: 0 1px 5px rgba(0,0,0,.15);
                .top {
                    height: 50px;
                    font-size: 18px;
                    span {
                        line-height: 50px;
                        margin-left: 30px;
                        float: left;
                        font-weight: bold;
                        letter-spacing: 1px;
                        text-shadow: 0 1px 1px rgba(0,0,0,.3);
                    }
                    .helpPop {
                        margin-right: 30px;
                        float: right;
                    }
                    i {
                        margin-right: 3px;
                        font-size: 18px;
                    }
                }
                .bottom {
                    padding: 0 20px;
                    box-sizing: border-box;
                    width: 100%;
                }
                .bottom>div {
                    border-top: 1px solid #EEEEEE;
                    padding-top: 25px;
                    box-sizing: border-box;
                    width: 100%;
                }
                .main,.left,.right {
                    float: left;
                    height: 200px;
                }
                .main {
                    width: 100%;
                }
                .middle {
                    margin:0 90px 0 120px;
                    /*background: rgba(0,0,0,.3);*/
                    height: 100%;
                    text-align: left;
                    font-size: 14px;
                    span {
                        color: #000;
                        font-size: 16px;
                        font-weight: bold;
                        display: inline-block;
                        margin-bottom: 75px;
                    }
                    .grade{
                        height: 20px;
                        line-height: 20px;
                        i {
                            display: inline-block;
                            line-height: 20px;
                        }
                    }
                    .message {
                        margin-top: 10px;
                        display: flex;
                        vertical-align: middle;
                        justify-content: space-between;
                    }
                    p {
                        line-height: 30px;
                    }
                    .spe {
                        max-width: 270px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .left {
                    width: 120px;
                    margin-left: -100%;
                    .imgBox {
                        margin: 0 auto 16px;
                        width: 80px;
                        height: 80px;
                        background: #64CCFF;
                        border-radius: 5px;
                    }
                    i {
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        font-size: 50px;
                        margin-top: 10px;
                    }
                    span {
                        display: inline-block;
                        width: 66px;
                        height: 20px;
                        background: #00A5F7;
                        color:#fff;
                        font-size: 12px;
                        line-height: 20px;
                        border-radius: 5px;
                    }
                }
                .right {
                    width: 90px;
                    margin-left: -90px;
                }

            }
            .sheet {
                position: relative;
                min-height: 600px;
                box-sizing: border-box;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                margin-bottom: 22px;
                background: #fff;
                box-shadow: 0 1px 5px rgba(0,0,0,.15);
                padding: 20px;
                .choose {
                    border-bottom: 1px solid #E1E6EF;
                    margin-bottom:10px;
                    text-align: left;
                    cursor: pointer;
                    span {
                        display: inline-block;
                        border:1px solid #E1E6EF;
                        line-height: 36px;
                        font-size: 15px;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                        padding: 0 24px;
                        margin-right: 5px;
                        text-align: center;
                        background: #F0F0F0;
                        border-bottom: none;
                    }
                    .current {
                        background: #2F9CF6;
                        color:#fff;
                    }
                }
                .form {
                    margin-bottom: 10px;
                }
                i {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    width: 141px;
                    height: 123px;
                    background: url(../assets/img/nodata2.png) no-repeat;
                }
            }
            .assess {
                height: 75px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                margin-bottom: 22px;
                background: #fff;
                box-shadow: 0 1px 5px rgba(0,0,0,.15);
                padding: 20px;
                box-sizing: border-box;
                text-align: left;
                color: #666666;
                font-size: 14px;
                letter-spacing: 1px;
            }
        }
        .relevant {
            width: 274px;
            .related {
                width: 100%;
                margin-bottom: 22px;
                box-shadow: 0 1px 5px rgba(0,0,0,.15);
                .title {
                    background-image: url(../assets/img/hotBG.png);
                }
            }
            .recommend {
                box-shadow: 0 1px 5px rgba(0,0,0,.15);
                .title {
                    background-image: url(../assets/img/newBG.png);
                }
            }
            .title {
                height: 50px;
                width: 100%;
                background-size: cover;
                line-height: 50px;
                padding: 0 15px;
                box-sizing: border-box;
                color:#fff;
                span:nth-of-type(1) {
                    float: left;
                    font-size: 18px;
                    font-weight: bold;
                    text-shadow: 0 1px 1px rgba(0,0,0,.2);
                }
                span:nth-of-type(2) {
                    float: right;
                    font-size: 14px;
                }
                i {
                    margin-right: 5px;
                }
            }
            .file {
                width: 100%;
                height: 290px;
                overflow: auto;
                background: #fff;
                padding: 10px;
                box-sizing: border-box;
                position: relative;
                i {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    width: 141px;
                    height: 123px;
                    background: url(../assets/img/nodata2.png) no-repeat;
                }
                a {
                    display: block;
                    line-height: 30px;
                    text-align: left;
                    color: #000;
                    font-size: 14px;
                }
                a:hover span:nth-of-type(1){
                    color: #2f9cf6;
                }
                span:nth-of-type(1) {
                    float:left;
                    width: 160px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                span:nth-of-type(2) {
                    float:right;
                }
            }
        }
    }
</style>