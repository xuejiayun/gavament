<template>
    <div class="helpPop">
        <el-button class="btn" type="text" @click="centerDialogVisible = true">
            <i :class="className"></i>{{iValue}}
        </el-button>
        <el-dialog
                class="dialog"
                :lock-scroll=true
                :title="dialogTitle"
                :visible.sync="centerDialogVisible"
                width="900px"
                center>
            <div class="substance">
                <div class="treeLeft">
                    <a href="javascript:;" :class="{current: index==helpIndex}" v-for="(item, index) in changeTitle" @click="changeHelp(index)">
                        <i class="iconfont icon-wenjian"></i>
                        {{item}}
                    </a>
                </div>
                <div class="infoRight">
                    <div class="title">{{changeInfo[helpIndex].title}}</div>
                    <div class="detail">
                        <p>{{changeInfo[helpIndex].describe}}</p>
                        <div v-for="(item, index) in changeInfo[helpIndex].detailArr" :key="index">
                            <p><strong>{{index+1}}{{item.stress}}</strong>{{item.news}}</p>
                            <div v-if="item.imgArr" v-for="(value, index) in item.imgArr">
                                <img v-if="value.src" :src="value.src" alt="">
                                <p v-if="value.info">{{value.info}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: ['eachHelp'],
        computed: {
            className () {
                return this.eachHelp.className
            },
            iValue () {
                return this.eachHelp.value
            },
            dialogTitle () {
                return this.eachHelp.title
            },
            changeInfo () {
                if (this.eachHelp.isGuide) {
                    if (this.helpInfo.length < 4) {
                        this.helpInfo.unshift(this.guideInfo)
                    }
                } else {
                    if (this.helpInfo.length > 3) {
                        this.helpInfo.shift(this.guideInfo)
                    }
                }
                return this.helpInfo
            },
            changeTitle () {
                if (this.eachHelp.isGuide) {
                    if (this.helpArr.length < 4) {
                        this.helpArr.unshift(this.guide)
                    }
                } else {
                    if (this.helpArr.length > 3) {
                        this.helpArr.shift(this.guide)
                    }
                }
                return this.helpArr
            }
        },
        data () {
            //如果是true则生成四个，如果为false，则为三个。
            return {
                centerDialogVisible: false,
                guide: '首页',
                guideInfo: {
                    title: '首页功能',
                    describe: '用户登录后默认展示页面，整个界面采取滚屏的展示方式，主要内容是以资源类型、主题分类、行业分类、数据领域以及提供机构等展示南通市信息资源信息。',
                    detailArr: [
                        {
                            stress: '.全局搜索:',
                            news: '输入需要查看资源的关键字，可查看系统中存在与该关键字相关的所有资源项。',
                            imgArr: [
                                {src: require('../assets/img/show/SY0.png')}
                            ]
                        },
                        {
                            stress: '.分类索引:',
                            news: '分类索引分屏提供主题分类，行业分类，数据领域，部门分类四种分类索引，通过标签进行切换展示。分类的内容在字典管理中录入；每种分类提供二级索引，其中一级分类有图标展示，二级分类只显示分类名称，点击分类后跳转到分类列表展示界面。',
                            imgArr: [
                                {src: require('../assets/img/show/SY1.png')}
                            ]
                        },
                        {
                            stress: '.资源推荐:',
                            news: '资源推荐分屏展示热点数据集、最新资源和热点API服务。热点数据集和热点API服务，由用户订阅量进行排序，系统默认展示最热的8条资源。',
                            imgArr: [
                                {src: require('../assets/img/show/SY2.png')}
                            ]
                        }
                    ]
                },
                helpArr: ['数据集','文件','API服务'],
                helpIndex: 0,
                helpInfo: [
                    {
                        title: '数据集',
                        describe: '用户可根据数据目录、提供部门分类进行数据的查看。数据目录中，可按需求通过主题分类、行业分类、数据领域进行资源选择。',
                        detailArr: [
                            {
                                stress: '.资源目录查看:',
                                news: '点击资源目录名称进入资源目录详细页。',
                                imgArr: [
                                    {src: require('../assets/img/show/SJJ1.png')},
                                    {info: '原数据信息：展示该资源项下的所有具体资源项；数据图谱：展示该资源项的所有属性及订阅关系。'},
                                    {src: require('../assets/img/show/SJJ2.png')},
                                    {src: require('../assets/img/show/SJJ3.png')}
                                ]
                            },
                            {
                                stress: '.资源订阅:',
                                news: '订阅资源，需要先“登录”系统。点击右上角登录即可。点击“订阅”按钮，进入申请订阅流程。',
                                imgArr: [
                                    {src: require('../assets/img/show/SSJ6.png')}
                                ]
                            },
                            {
                                stress: '.资源下载:',
                                news: '下载功能，仅限用户订阅完成，资源所属单位审批通过后，方可下载该资源项。默认下载存储路径为D盘→下载。'
                            },
                            {
                                stress: '.资源收藏:',
                                news: '收藏该资源项，可在“我的收藏”中查看该资源项。',
                                imgArr: [
                                    {src: require('../assets/img/show/SJJ5.png')},
                                    {info: '相关资源：该资源项所属机构发布的其他共享资源项；推荐资源：根据当前主题推荐的相关资源项。'}
                                ]
                            },
                        ]
                    },
                    {
                        title: '文件',
                        describe: '用户可根据数据目录、提供部门分类进行数据的查看。数据目录中，可按需求通过主题分类、行业分类、数据领域进行资源选择。',
                        detailArr: [
                            {
                                stress: '.资源目录查看:',
                                news: '点击资源目录名称进入资源目录详细页。',
                                imgArr: [
                                    {src: require('../assets/img/show/WJ1.png')}
                                ]
                            },
                            {
                                stress: '.资源订阅:',
                                news: '订阅资源，需要先“登录”系统。点击右上角登录即可。点击“订阅”按钮，进入“填写订阅信息”页签，支持对目标路径文件的清除功能，支持对重名文件的处理，即覆盖与重命名。',
                                imgArr: [
                                    {src: require('../assets/img/show/WJ2.png')},
                                    {info: '根据流程依次填写基本信息后提交即可。'},
                                    {src: require('../assets/img/show/WJ3.png')},
                                ]
                            },
                            {
                                stress: '.资源下载:',
                                news: '下载功能，仅限用户订阅完成，资源所属单位审批通过后，方可下载该资源项。支持对资源的模糊搜索。',
                                imgArr: [
                                    {src: require('../assets/img/show/WJ7.png')}
                                ]
                            },
                            {
                                stress: '.资源收藏:',
                                news: '收藏该资源项，可在“我的收藏”中查看该资源项。',
                                imgArr: [
                                    {src: require('../assets/img/show/WJ5.png')},
                                    {info: '相关资源：该资源项所属机构发布的其他共享资源项；推荐资源：根据当前主题推荐的相关资源项。'}
                                ]
                            },
                        ]
                    },
                    {
                        title: 'API服务',
                        describe: '用户登录后默认展示页面，整个界面采取滚屏的展示方式，主要内容是以资源类型、主题分类、行业分类、数据领域以及提供机构等展示南通市信息资源信息。',
                        detailArr: [
                            {
                                stress: '.资源目录查看:',
                                news: '点击资源目录名称进入资源目录详细页。',
                                imgArr: [
                                    {src: require('../assets/img/show/API1.png')}
                                ]
                            },
                            {
                                stress: '.资源订阅:',
                                news: 'API类型的资源，点击“订阅”按钮，进入“填写订阅信息”页签，校验应用标识选择“否”，页面不展示“应用标识”输入框。',
                                imgArr: [
                                    {src: require('../assets/img/show/API2.png')},
                                    {info: '根据流程依次填写基本信息后提交即可。'},
                                    {src: require('../assets/img/show/API3.png')}
                                ]
                            },
                            {
                                stress: '.资源下载:',
                                news: '下载功能，仅限用户订阅完成，资源所属单位审批通过后，方可下载该资源项。默认下载存储路径为D盘→下载。'
                            },
                            {
                                stress: '.资源收藏:',
                                news: '收藏该资源项，可在“我的收藏”中查看该资源项。',
                                imgArr: [
                                    {src: require('../assets/img/show/API5.png')},
                                    {info: '相关资源：该资源项所属机构发布的其他共享资源项；推荐资源：根据当前主题推荐的相关资源项。'}
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            changeHelp (index) {
                this.helpIndex = index
            }
        }
    }
</script>

<style>
    .helpPop .el-dialog__header{
        box-sizing: border-box;
        padding: 0 20px;
        text-align: left;
        background: #F8F8F8;
        border-bottom: 1px solid #EEEEEE;
        height: 40px;
    }
    .helpPop .el-dialog__title {
        line-height: 40px;
        font-size:15px;
    }
    .helpPop .el-dialog__headerbtn{
        top: 13px;
    }
    .helpPop .el-dialog--center .el-dialog__body {
        padding: 0 0 0 25px;
    }
    .helpPop .el-dialog__wrapper {
        overflow: hidden;
    }
</style>
<style scoped lang="scss">
    .btn i {
        margin-right: 3px;
    }
    .dialog {
        .substance {
            max-height: 500px;
            overflow: auto;
            display: flex;
            justify-content: space-between;
        }
        .treeLeft {
            width: 226px;
            border-right:1px solid #CCCCCC;
            display: inline-block;
            padding-top:5px;
            a {
                display: block;
                color: #000;
                padding: 10px 0 10px 5px;
                border: 1px solid transparent;
                font-weight: bold;
                font-size: 15px;
                text-shadow: 0 1px 1px rgba(0,0,0,.2);
            }
            a.current {
                color: #2F9CF6;
                background: #F2F2F2;
                border-color: #CCCCCC;
                border-right:none;
            }
            i {
                padding-right: 4px;
            }
        }
        .infoRight {
            width: calc(100% - 227px);
            padding: 5px 20px;
            box-sizing: border-box;
            overflow: auto;
            .title {
                font-size: 20px;
                font-weight: bold;
                line-height: 54px;
                border-bottom: 1px dashed #EAEAEA;
            }
            img {
                width: 100%;
                height: auto;
                margin: 5px 0;
            }
            p {
                line-height:28px;
                font-size:14px;
            }
        }
    }
</style>